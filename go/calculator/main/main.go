package main

import (
	"fmt"
	"os"
	"strconv"

	"exercise.com/calc"
)

func main() {
	args:=os.Args[1:];

	if len(args) < 3 {
		fmt.Println("Too few arguments given");
		return;
	}
	if len(args) > 3 {
		fmt.Println("Excedent arguments will be ignored");
	}

	var a float32 = str2flt32(args[0]);
	var b float32 = str2flt32(args[1]);
	var op string = args[2];

	result, err:=calc.Calculate(a, b, op);
	if err!=nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%v\n", result);
	}
}

func str2flt32(str string) float32 {
	var result float32 = 0.0;
	if s, err := strconv.ParseFloat(str, 32); err==nil {
		result=float32(s);
	}
	return result;	
}
