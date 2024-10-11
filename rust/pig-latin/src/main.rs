fn main() {
	let args: Vec<String> = std::env::args().collect();
	if args.len() < 2 {
		panic!("No argument given");
	}

	let mut pig_latin=String::from(&args[1][1..args[1].len()]);
	pig_latin.push(args[1].chars().nth(0).unwrap());
	pig_latin.push_str("ay");

	println!("{}", pig_latin);
}
