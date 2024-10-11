use std::fs::File;
use std::io::prelude::*;
use std::collections::HashMap;

fn main() -> std::io::Result<()> {
	let mut file = File::open("./test.txt")?;
	let mut text = String::new();

	file.read_to_string(&mut text)?;

	println!("Text: \n {}", text);

	let mut word_count: HashMap<&str, i8> = HashMap::new();

	text = clean_text(text);
	
	let words: Vec<&str> = text.split(' ').collect();

	for word in words {
		if word_count.contains_key(word) {
			word_count.insert(word, word_count.get(word).unwrap()+1);
		} else {
			word_count.insert(word, 1);
		}
	}

	if word_count.contains_key("") {
		word_count.remove("");
	}

	let mut summary: String = String::new();
	summary.push_str("Summary: \n");

	let mut total_words = 0;
	loop {
		let mut word = "";
		let mut count: i8 = 0;
		for (key, value) in &word_count {
			if key==&"" {
				continue;
			}
			if value >= &count {
				count = *value;
				word = key;
			}
		}
		summary.push_str(format!("{}: {}\n", word, count).as_str());
		word_count.remove(&word);
		total_words+=count;

		if word_count.is_empty() {
			break;
		}
	}

	summary.push_str(format!("Total of words: {}\n", total_words).as_str());
	println!("{}", summary);

	let mut summary_file = File::create("./summary.txt")?;
	summary_file.write_all(summary.as_bytes())?;
	println!("Summary saved at summary.txt");
	

	Ok(())
}

fn clean_text(text: String) -> String {
	let mut new_text: String;

	let to_remove: Vec<&str> = vec![",", ".", "!", "?"];

	let mut contractions: HashMap<String, String> = HashMap::new();
	contractions.insert("I'm".to_string(), "I am".to_string());

	new_text = text.replace("\n", " ");
	
	for chr in to_remove {
		new_text = new_text.replace(chr, "");
	}

	for (key, value) in contractions {
		new_text = new_text.replace(key.as_str(), value.as_str());
	}

	new_text
}
