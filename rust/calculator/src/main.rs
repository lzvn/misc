pub mod calculator;
	
fn main() {
	let args: Vec<String> = std::env::args().collect();
	let calc=calculator::Calc{};

	if args.len() < 3 {
		panic!("Too few arguments");
	}

	let a=args[1].parse::<f32>().unwrap();
	let b=args[2].parse::<f32>().unwrap();
	let op=String::from(&args[3]);
	let result: f32;

	if op == "+" {
		result=calc.sum(a, b);
	} else if op == "-" {
		result=calc.subtract(a, b);
	} else if op == "*" {
		result=calculator::multiply(a, b);
	} else if op == "/" {
		result=calculator::divide(a, b);
	} else {
		panic!("Invalid operation");
	}

	println!("The result is {}", result);
	
}
