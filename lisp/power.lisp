(defun ^ (x n)
  (if (> n 1)
    (* x (^ x (- n 1)))
    x ) )

(print (^ 10 2))
