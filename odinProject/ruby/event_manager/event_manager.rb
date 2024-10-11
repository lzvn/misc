require 'csv'
require 'erb'

puts "event manager started!\n\n"

class Attendee
    attr_accessor :id, :register_date, :first_name, :last_name, :email, :phone_number, :street, :city, :state, :zip_code

    def initialize(id, register_date, first_name, last_name, email, phone_number, street, city, state, zip_code)
        @id = id
        @register_date = register_date
        @first_name = first_name
        @last_name = last_name
        @email = email
        @phone_number = phone_number
        @street = street
        @city = city
        @state = state
        self.zip_code = zip_code
    end

    def initialize(attendee_array)
        @id = attendee_array[0]
        @register_date = attendee_array[1]
        @first_name = attendee_array[2]
        @last_name = attendee_array[3]
        @email = attendee_array[4]
        @phone_number = attendee_array[5]
        @street = attendee_array[6]
        @city = attendee_array[7]
        @state = attendee_array[8]
        self.zip_code = attendee_array[9]
    end

    def zip_code=(zip_code)
        @zip_code = zip_code.to_s.slice(0, 5).rjust(5, "0")
    end
end

def save_thanks_letter(id, letter_content, output_dir)
    letter_file = File.open(output_dir + "thanks_" + id + ".html", 'w+')
    letter_file.puts letter_content
    letter_file.close
end

event_attendees_file = "./event_attendees.csv"
attendees = []

"""
# code without the csv library, used just for the introduction

if File.exist? event_attendees_file
   lines =  File.readlines(event_attendees_file)
   lines.shift
   lines.each do |line|
    line_split = line.split(',')
    attendees.push(Attendee.new(line_split))
   end
end

attendees.each do |attendee| 
    puts attendee.first_name + " " + attendee.last_name
end

"""

data = CSV.open(event_attendees_file, headers: true)

# also, I could use the names of the headers to access the columns of each row in the data matrix by adding the
# parameter header_converters: true, thus, for instance, to access the zip_code, one would do just data[1][:zip_code]

data.each do |row|
    attendees.push(Attendee.new(row))
end

"""
attendees.each do |attendee|
    puts attendee.first_name + " " + attendee.last_name
end
"""

template_letter = File.read('form_letter.html')
erb_template = ERB.new template_letter
OUTPUT_FOLDER = "./letters/"
legislators_name = "Bob Sacamano" # I'm not registering at google civic services nor calling it, lmao

Dir.mkdir"./letters" unless Dir.exist? "./letters"

attendees.each do |attendee|
    attendee_name = attendee.first_name + " " + attendee.last_name
    output_letter = erb_template.result(binding)
    save_thanks_letter(attendee.id, output_letter, OUTPUT_FOLDER)
end

# clean telephone numbers
"""
If the phone number is less than 10 digits, assume that it is a bad number
If the phone number is 10 digits, assume that it is good
If the phone number is 11 digits and the first number is 1, trim the 1 and use the remaining 10 digits
If the phone number is 11 digits and the first number is not 1, then it is a bad number
If the phone number is more than 11 digits, assume that it is a bad number
"""
attendees.each do |attendee|
    attendee.phone_number.tr!('^0-9', '') # regex bugs my mind
    length = attendee.phone_number.length

    if length < 10 or length > 12
        attendee.phone_number = nil
    elsif length == 11
        attendee.phone_number = attendee.phone_number[0] == '1' ? attendee.phone_number.reverse.chop.reverse : nil
    end

    puts attendee.phone_number
end