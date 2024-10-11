package main

import (
	"fmt"
	"os"
	"strings"
)

var VOWELS [10]string = [10]string{"A", "E", "I", "O", "U", "a", "e", "i", "o", "u"};

func main() {
	args:=os.Args[1:];

	if len(args)<1 {
		fmt.Println("Too few arguments given");
		return;
	}

	var vowel_count map[string]int = make(map[string]int);

	for _, vowel := range VOWELS {
		vowel_count[vowel] = 0;
	}

	for _, arg := range args {
		for _, char := range arg {
			_, key := vowel_count[string(char)];
			if key {
				vowel_count[string(char)]+=1;
			}
		}
	}

	var total_vowels int = 0;

	for len(vowel_count) > 0 {
		var vowel string = "";
		var count int = 0;
		for key, value := range vowel_count {
			if value >= count {
				count = vowel_count[key];
				vowel = key;
			}
		}

		delete(vowel_count, vowel);
		vowel = strings.ToUpper(vowel);
		count += vowel_count[vowel];
		delete(vowel_count, vowel);
		
		total_vowels+=count;
		fmt.Println(vowel, "or", strings.ToLower(vowel), ":", count);
	}

	fmt.Println("Total of vowels:", total_vowels);
}
