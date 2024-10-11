package main

import (
	"fmt"
	"os"
)

func main() {
	args:=os.Args[1:];
	
	if len(args) < 1 {
		return;
	}

	var reversed string = "";

	for i:=len(args)-1; i>=0; i-- {
		for j:=len(args[i])-1; j>=0;j-- {
			reversed+=string(args[i][j]);
		}
		reversed+=" ";
	}

	fmt.Println(reversed);
}
