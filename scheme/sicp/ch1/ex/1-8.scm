(define (abs x)
  (if (< x 0) (- x) x))

(define (square x)
  (* x x))

(define (cube x)
  (* x x x))

(define (good-enough? guess x)
  (define tolerance 0.0001)
  (< (abs (/ (- (cube guess) x) x)) tolerance))

(define (improve guess x)
  (define almost-zero 0.0000001)
  (if (= guess 0)
	  (improve almost-zero x)
	  (/ (+ (/ x (square guess)) (* 2 guess)) 3)))

(define (cbrt-iter guess x)
  (if (good-enough? guess x)
	  guess
	  (cbrt-iter (improve guess x) x)))
(define (cbrt x)
  (cbrt-iter (/ x 3) x))

(format #t "~f" (cube (cbrt 2)))
(newline)
