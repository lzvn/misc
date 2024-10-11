package calc

import "errors"

func Calculate(a float32, b float32, op string) (float32, error) {
	var result float32 = 0.0;
	switch(op) {
	case "+":
		result=a+b;
		break;
	case "-":
		result=a-b;
		break;
	case "*":
		result=a*b;
		break;
	case "/":
		if b==0 {
			return 0.0, errors.New("Division by zero");
		} else {
			result=a/b;
		}
		break;
	default:
		return 0.0, errors.New("Invalid operation")
	}

	return result, nil;
}
