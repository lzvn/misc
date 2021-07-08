(define (square x) (* x x))
(square 2)
(square 3)

(define (sum-of-squares x y)
  (+ (squares x) (squares y)))

(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))

(f 5)
