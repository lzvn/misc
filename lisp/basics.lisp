10 ;random atom
:thing
(+ 1 2 3 4 5) ;simple s-expression

(+ (* 3 3) (* 4 4))

#|
This is a block comment.
|#

'hi

(format t "hi" (terpri))

#b111 ;binary number
#o111 ;octal number
#x111 ;hexadecimal number
      ;very simple isn't?
3.1415s0 ;simple precision aka float
3.14158d0 ;double precision
1/2 ;fraction or ratio
#C(1 1) ;complex number. nice that lisp has a built-in complex number

					;lisp also has exponentials built in

(expt 2.718 3.1415)

					;(format t (expt 2.718 3.1415:)) ;tenho que aprender a printar ainda

(expt 2.718 #C(0 3.1415)) ;apenas testando para ver se funciona ou se buga FUNCIONA!

(write (expt 2.718 #C(0 3.1415)))
(format t "" (terpri))

t ;true
nil ;false
(not t) ;not
(and t nil) ;and
(or t nil) ;or

(format t "Benjamin \"Bugsy\" Siegel" (terpri))

(defparameter *nome* "Luiz")
(defparameter *helloname* "Hello ")
(concatenate 'string *helloname* "Hello " "Luiz")
					;(write *helloname*) ;it is not working as intended. I'm going to learn it sometime

(elt "Orange" 0) ; returns 'O'
(elt "Orange" 5) ; returns 'e'

(format nil "string") ;prints nothing, returns the formatted string
(format t "string") ;formats and prints the string
