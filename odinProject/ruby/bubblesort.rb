def bubble_sort(a)
    a if a.length == 1

    last = a.length-1

    while last > 0
        for i in (0...last)
            if a[i] > a[i+1]
                aux = a[i]
                a[i] = a[i+1]
                a[i+1] = aux
            end
        end
        last-=1
    end

    a
end

a = [4,3,78,2,0,2]
puts bubble_sort(a).join(" ")