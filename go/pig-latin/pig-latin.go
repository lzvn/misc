package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		return;
	}
	arg:=os.Args[1];
	fmt.Println(arg[1:]+string(arg[0])+"ay");
}
