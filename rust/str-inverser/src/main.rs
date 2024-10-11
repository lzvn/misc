fn main() {
    let args: Vec<String> = std::env::args().collect();
	let mut i: usize = args.len()-1;
	while i>0 {
		let mut chr: usize = args[i].len()-1;
		let mut reverse_word = String::from("");
		loop {
			//print!("{:?}", args[i].chars().nth(chr).unwrap());
			reverse_word.push(args[i].chars().nth(chr).unwrap());
			if chr==0 {
				break;
			}
			chr-=1;
		}		
		print!("{} ", reverse_word);
		i-=1;
	}

	println!();
}
