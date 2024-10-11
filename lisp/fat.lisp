(defun fat (n)
    (if (> n 0)
        (* n (fat (- n 1) ) )
        1) )

(print (fat 8))
