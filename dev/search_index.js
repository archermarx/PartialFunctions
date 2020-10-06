var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PartialFunctions","category":"page"},{"location":"#PartialFunctions","page":"Home","title":"PartialFunctions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CurrentModule = PartialFunctions","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [PartialFunctions]","category":"page"},{"location":"internals/#PartialFunctions.:$-Tuple{Function,Tuple}","page":"Internals","title":"PartialFunctions.:$","text":"($)(f::Function, args...)\n\nPartially apply the given arguments to f. Typically used as infix f $ args\n\nThe returned function is of type PartialFunctions.PartialFunction{typeof(f), typeof(args)}\n\nExamples\n\njulia> using PartialFunctions\n\njulia> simonsays = println $ \"Simon says: \"\nprintln(\"Simon says: \", ...)\n\njulia> simonsays(\"Partial function application is cool!\")\nSimon says: Partial function application is cool!\n\njulia> typeof(simonsays)\nPartialFunctions.PartialFunction{typeof(println),Tuple{String}}\n\n\n\n\n\n","category":"method"},{"location":"internals/#PartialFunctions.:<|-Tuple{Function,Vararg{Any,N} where N}","page":"Internals","title":"PartialFunctions.:<|","text":"<|(f, args)\n\nApplies a function to the succeeding argument or tuple of arguments. Acts as the reverse of |>, and is especially useful when combined with partial functions for  an alternative, low-parenthese function chaining syntax\n\nExamples\n\njulia> using PartialFunctions\n\njulia> isdigit <| '1'\ntrue\n\njulia> (+) <| (2, 3)...\n5\n\njulia> map $ Int <| [1.0, 2.0, 3.0]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\n\n\n\n\n","category":"method"}]
}
