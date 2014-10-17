var hackbrightStudents = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44", "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"];

var obj = {};
for (var i = 0;i < hackbrightStudents.length; i++)
{
    if (hackbrightStudents[i] in obj)
    {
        obj[hackbrightStudents[i]] += 1;
    }
    else
    {
        obj[hackbrightStudents[i]] = 1;
    }
}

var dupes = [];
for (var name in obj)
{
    if (obj[name] > 1)
    {
        dupes.push(name);
    }
}

console.log(dupes);