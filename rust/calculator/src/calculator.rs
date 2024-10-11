pub fn sum(a: f32, b: f32) -> f32 {
	a+b
}

pub fn subtract(a: f32, b: f32) -> f32 {
	a-b
}

pub fn multiply(a: f32, b: f32) -> f32 {
	a*b
}

pub fn divide(a: f32, b: f32) -> f32 {
	if b==0.0 {
		panic!("Error: Division by zero");
	}
	a/b
}

/*
PS: it was going wrong for two reasons, plus a probable one
First, I was using &self instead of self, which confused the compiler, I believe that &self has another use I
must research into, second, my pub's were misused, I only had one for the struct and not for the functions within
the implementation which means the compiler was look for sum and not finding it and third, the probable one, I think
sum is a special name for a method in types that implement Iterator and when the compiler couldn't find my sum in
Calculator, it implied I meant this one and that Calculator (now Calc) implemented Iterator, hence the confusing
error messages, changing sum to somar made them clearer
*/

pub struct Calc {}

trait CalcFn {
	fn sum(self, a: f32, b: f32) -> f32;
}

impl Calc {
	pub fn sum(self, a: f32, b: f32) -> f32 {
		println!("I'm sum. You called me.");
		a+b
	}
	pub fn subtract(self, a: f32, b: f32) -> f32 {
		a-b
	}

	pub fn multiply(self, a: f32, b: f32) -> f32 {
		a*b
	}

	pub fn divide(self, a: f32, b: f32) -> f32 {
		if b==0.0 {
			panic!("Error: Division by zero");
		}
		a/b
	}
}
