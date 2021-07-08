(define (sum-of-squares x y) (+ (* x x) (* y y)))

(define (sm-sqr-larger x y z)
  (cond ((and (> x y) (> y z)) (sum-of-squares x y))
		((and (> x z) (> z y)) (sum-of-squares x z))
		(else (sum-of-squares y z))))

(display (sm-sqr-larger 1 3 4)) ;; expected 25
(newline)
