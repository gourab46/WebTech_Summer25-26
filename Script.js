console.log("JS Connected");


let Attempt = 0;
let LockTime = 0;

function collect_data()
{
    let IsvalidName = collect_name();
    let IsvalidPass = collect_pass();

    let Username = document.getElementById("name").value;
    let Password = document.getElementById("pass").value;

    let CurrentTime = new Date().getTime();

    if(CurrentTime < LockTime)
    {
        document.getElementById("LoginMessage").innerHTML="You are locked for 5 minutes.";
        return false;
    }

    if(IsvalidName==true && IsvalidPass==true)
    {
        if(Username=="AIUB" && Password=="$_student")
        {
            document.getElementById("LoginMessage").innerHTML="Successfully Logged In";

            Attempt = 0;
            LockTime = 0;

            return true;
        }

        else
        {
            Attempt++;

            if(Attempt==1)
            {
                document.getElementById("LoginMessage").innerHTML="You have 3 attempts left.";
            }

            else if(Attempt==2)
            {
                document.getElementById("LoginMessage").innerHTML="You have 2 attempts left.";
            }

            else if(Attempt>=3)
            {
                document.getElementById("LoginMessage").innerHTML="You have 1 attempt left. You are locked for 5 minutes.";

                LockTime = CurrentTime + (5*60*1000);
            }
        }
    }

    return false;
}

function collect_name()
{
    let Username = document.getElementById("name").value;

    if(Username=="")
    {
        document.getElementById("NameError").innerHTML="Username Can Not Be Empty";
        return false;
    }

    else
    {
        document.getElementById("NameError").innerHTML="";
    }

    console.log(Username);

    return true;
}

function collect_pass()
{
    let Password = document.getElementById("pass").value;

    if(Password=="")
    {
        document.getElementById("PassError").innerHTML="Password Can Not Be Empty";
        return false;
    }

    else
    {
        document.getElementById("PassError").innerHTML="";
    }

    console.log(Password);

    return true;
}