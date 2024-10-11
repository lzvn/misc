def stock_picker(stocks)
    [0, 0] if stocks.length <= 1

    if stocks.length == 2
        if stocks[1] >= stocks[0]
            [0, 1]
        else
            [0, 0]
        end
    end

    buy = 0
    sell = 0
    diff = -10000000000000000000.0

    start_index = 0
    end_index = stocks.length

    start_index+=1 if stocks[0] == stocks.max
    end_index-=1 if stocks[-1] == stocks.min
    
    for i in (0...stocks.length)
        for j in (i...stocks.length)
            if (stocks[j]-stocks[i]) > diff
                buy = i
                sell = j
                diff = stocks[j]-stocks[i]
            end
        end
    end

    [buy, sell]
end

s = [17,3,6,9,15,8,6,1,10]
puts stock_picker(s).join(" ")

puts s.join(" ")