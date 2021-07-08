(define (abs x)
  (if (< x 0) (- x) x))

(define (avg x y)
  (/ (+ x y) 2))

(define (sqrt x)
  (define (good-enough? guess)
	(define tolerance 0.0001)
	(< (abs (/ (- (* guess guess) x) x)) tolerance))

  (define (improve guess)
	(define almost-zero 0.0000001)
	(if (= guess 0)
		(avg almost-zero (/ x almost-zero))
		(avg guess (/ x guess))))

  (define (sqrt-iter guess)
	(if (good-enough? guess x)
		guess
		(sqrt-iter (improve guess x) x)))

  (sqrt-iter (/ x 2) x))

(format #t "~f" (sqrt 3))
(newline)
