use std::collections::HashMap;

static VOWELS: [char; 10] = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

fn main() {	
	let args: Vec<String> = std::env::args().collect();
	if args.len() < 2 {
		println!("{}", args.len());
		panic!("Too few arguments given");
	}
	let mut vowel_count: HashMap<char, i8> = HashMap::new();

	for i in 0..VOWELS.len() {
		vowel_count.insert(VOWELS[i], 0);
	}

	for i in 1..args.len() {
		for j in 0..args[i].len() {
			let chr = args[i].chars().nth(j).unwrap();
			if vowel_count.contains_key(&chr) {
				let count: i8 = vowel_count.get(&chr).unwrap() + 1;
				vowel_count.insert(chr, count);
			}
		}
	}

	println!("Total number of vowels: {}", countAllVowels(&vowel_count));
	println!("Vogais por frequência de uso: ");

	loop {
		let mut vowel: char = 'a';
		let mut count: i8 = 0;

		for (key, value) in &vowel_count {
			if *value >= count {
				vowel=*key;
				count=*value;
			}
		}

		vowel_count.remove(&vowel);
		let capt_vowel = vowel.to_uppercase().to_string().chars().nth(0).unwrap();
		count+= vowel_count.get(&capt_vowel).unwrap();
		vowel_count.remove(&capt_vowel);
		
		println!("{} or {}: {}", capt_vowel, vowel, count);
		if vowel_count.is_empty() {
			break;
		}
	}
}

fn countAllVowels(vowel_count: &HashMap<char, i8>) -> i8 {
	let mut total_vowels: i8 = 0;
	for i in 0..VOWELS.len() {
		total_vowels+=vowel_count.get(&(VOWELS[i])).unwrap()
	}
	total_vowels
}
