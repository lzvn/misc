(define (abs1 x)
  (cond ((> x 0) x)
		((= x 0) 0)
		((< x 0) (- x))))

(define (abs2 x)
  (cond ((< x 0) (- x))
		(else x)))

(define (abs3 x)
  (if (< x 0)
	  (- x)
	  x))

(display (abs1 -5))
(newline)
(display (abs2 -5))
(newline)
(display (abs3 -5))
(newline)

(define (and-test x) (and (> x 5) (< x 10)))
(display (and-test 3))
(newline)
(display (and-test 7))
(newline)

(define (>=1 x y) (or (> x y) (= x y)))
(define (>=2 x y) (not (< x y)))
