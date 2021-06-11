const specialForms = Object.create(null);

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Wrong number of args to while");
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }

  // Since undefined does not exist in Egg, we return false,
  // for lack of a meaningful result.
  return false;
};

specialForms.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
};

specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of define");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("Functions need a body");
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map(expr => {
    if (expr.type != "word") {
      throw new SyntaxError("Parameter names must be words");
    }
    return expr.name;
  });

  return function() {
    if (arguments.length != params.length) {
      throw new TypeError("Wrong number of arguments");
    }
    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return evaluate(body, localScope);
  };
};

specialForms.arthmOpr = (args, scope, op) => {
	if(args.length < 2) throw new SyntaxError("Too few arguments to arithmetic operation");
	let value = 0;
	args.forEach((arg) => {
		argValue = evaluate(arg);
		value = Function("a, b", `return a ${op} b;`)(value, argValue);
	});

	return value;
}

specialForms.arthmCmp = (args, scope, op) => {
	if(args.length < 2) throw new SyntaxError("Too few arguments to arithmetic comparison");
	if(args.length > 2) throw new SyntaxError("Too many arguments to arithmetic comparison");
	let arg1 = evaluate(args[0]);
	let arg2 = evaluate(args[1]);
	return Function("a, b", `return a ${op} b;`)(arg1, arg2);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//exercises
specialForms.array = (args, scope) => {
	let arrayValues = [];
	args.forEach((arg) => {
		arrayValues.push(evaluate(arg, scope));
	});
	return arrayValues;
}

specialForms.length = (args, scope) => {
	if(typeof(evaluate(args[0], scope))!=='object') throw new SyntaxError("Getting length of non-array");
	return evaluate(args[0], scope).length;
}

specialForms.element = (args, scope) => {
	let arrayArg = evaluate(args[0], scope);
	let elementIndex = evaluate(args[1], scope);

	if(typeof(arrayArg)!=='object') throw new SyntaxError("Getting element of non-array");
	if(elementIndex>arrayArg || elementIndex < 0) throw new SyntaxError("Index is negative or greater than array's length");
	return evaluate(args[0], scope)[elementIndex];
}

specialForms.set = (args, scope) => {
	let arg = args[0];
	if(!(arg.name in scope)) throw new SyntaxError("Variable not defined");
	if(arg.type!=='word') throw new SyntaxError("Setting a literal");

	let value = evaluate(args[1], scope);
	scope[arg.name] = value;
	return value;

}
///////////////////////////////////////////////////////////////////////////////////////////////

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

//////////////////////////////////////////////////////////////////////////////////////////////

function sym2Name(operator) {
	const mathOpList = ["+", "-", "*", "/"];
	const mathCmList = ["==", "===", "<", ">", "<=", ">="];
	let newOperator = operator;
	if(mathOpList.indexOf(operator.name) >= 0) {
		newOperator.opSymbol = newOperator.name;
		newOperator.name = "arthmOpr";
	}
	if(mathCmList.indexOf(operator.name) >= 0) {
		newOperator.opSymbol = newOperator.name;
		newOperator.name = "arthmCmp";
	}
	return newOperator;
}

function evaluate(expr, scope) {
	if (expr.type == "value") {
		return expr.value;
	} else if (expr.type == "word") {
		if (expr.name in scope) {
			return scope[expr.name];
		} else {
			throw new ReferenceError(
			`Undefined binding: ${expr.name}`);
		}
	} else if (expr.type == "apply") {
		let {operator, args} = expr;
		operator = sym2Name(operator);
		if (operator.type == "word" && operator.name in specialForms) {
			return specialForms[operator.name](expr.args, scope, operator.opSymbol);
		} else {
			let op = evaluate(operator, scope);
			if (typeof op == "function") {
				return op(...args.map(arg => evaluate(arg, scope)));
			} else {
				throw new TypeError("Applying a non-function.");
			}
		}
	}
}

module.exports = {
	evaluate: evaluate,
	specialForms: specialForms,
	topScope: topScope
}
