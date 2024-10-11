package main

import (
	"fmt"
	"os"
	"strings"
)

const FILEPATH = "test.txt";
const SUMMARY_FILEPATH = "summary.txt";

func main() {
	file, err := os.Open(FILEPATH);
	if err!=nil {
		fmt.Println(err);
		return;
	}
	
	stat, err := os.Stat(FILEPATH);
	if err!=nil {
		fmt.Println(err);
		return;
	}

	data := make([]byte, stat.Size());
	file.Read(data);

	text:="";
	word_count := make(map[string]int);
	
	for _, char_byte := range data {
		char := filterChar(string(char_byte))
		if char==" " {
			text = strings.ToLower(removeContractions(text));
			words := strings.Split(text, " ");

			for _, word := range words {
				_, contains_key := word_count[word];
				if contains_key {
					word_count[word]+=1;
				} else {
					word_count[word]=1;
				}
			}
			text="";
		} else {
			text+=char;
		}
	}

	total_words := 0;
	summary := "Summary: \n";

	for len(word_count) > 0 {
		word := "";
		count := 0;
		for key, value := range word_count {
			if value >= count {
				word = key;
				count = value;
			}
		}
		total_words += count;
		summary += fmt.Sprintf("%v: %v\n", word, count);
		delete(word_count, word);
	}

	summary += fmt.Sprintf("Total of words: %v\n", total_words);

	fmt.Println(summary);
	summary_file, err := os.Create(SUMMARY_FILEPATH);

	if err != nil {
		fmt.Println("Error: could not make the summary file");
		return;
	}

	summary_file.Write([]byte(summary));
}

func filterChar(char string) string {
	chars_to_filter := []string{",", ".", "?", "!"};
	
	new_char := char;

	if new_char == "\n" {
		new_char=" ";
	} else if isInStrArray(new_char, chars_to_filter) {
		new_char="";
	}

	return new_char;
}

func removeContractions(word string) string {
	contractions := make(map[string]string);
	contractions["I'm"] = "I am";

	new_word := word;

	value, contains_key := contractions[new_word];
	if contains_key {
		new_word = value;
	}

	return new_word;
}

func isInStrArray(str string, arr []string) bool {
	found:=false;

	for _, element := range arr {
		if str==element {
			found=true;
		}
	}

	return found;
}
