function u_to_u()
        {
            var unit_change=document.getElementById("select").value;
            if(unit_change=="Select Units")
            {
                alert("Please select unit for change")
            }
            else if(unit_change=="Temperature")
            {
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Celcius";
                document.getElementById("unit2").value="Fahrenheit";
                document.getElementById("cel").placeholder="0";
                document.getElementById("fah").placeholder="32";
                document.getElementById("for").innerText="(0°C × 9/5) + 32 = 32°F";
            }
            else if(unit_change=="Area")
            {   
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Square meter";
                document.getElementById("unit2").value="Square Foot";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="10763910.4";
                document.getElementById("for").innerText="divide the area value by 1e+6";
            }
            else if(unit_change=="Mass")
            {
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Kilogram";
                document.getElementById("unit2").value="Gram";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="1000";
                document.getElementById("for").innerText="multiply the mass value by 1000";

            }
            else if(unit_change=="Length")
            {
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Meter";
                document.getElementById("unit2").value="Centimeter";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="100";
                document.getElementById("for").innerText="multiply the length value by 100";
            }
            else if(unit_change=="Time")
            {
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Second";
                document.getElementById("unit2").value="Minute";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="0.0166667";
                document.getElementById("for").innerText="divide the time value by 60";
            }
            else if(unit_change=="Speed")
            {
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Meter per second";
                document.getElementById("unit2").value="Kilometer per hour";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="3.6";
                document.getElementById("for").innerText="multiply the speed value by 3.6";
            }
            else{
                document.getElementById("cel").value="";
                document.getElementById("fah").value="";
                document.getElementById("unit1").value="Liter";
                document.getElementById("unit2").value="Mililiter";
                document.getElementById("cel").placeholder="1";
                document.getElementById("fah").placeholder="1000";
                document.getElementById("for").innerText="multiply the volume value by 1000";
            }
        }
        function u1()
        {
            var pl=document.getElementById("unit1").value;
             if(pl=="Celcius"){
                var Celsius=document.getElementById("cel").value;
                var Fahrenheit=Celsius*9/5+32;  
                document.getElementById("fah").value=Fahrenheit;
            }
            else if(pl=="Square meter"){
                var m=document.getElementById("cel").value;
                var ft=m*10.764;
                document.getElementById("fah").value=ft;

            }
            else if(pl=="Kilogram"){
                var k=document.getElementById("cel").value;
                var g=k*1000;
                document.getElementById("fah").value=g;
            }
            else if(pl=="Meter"){
                var m=document.getElementById("cel").value;
                var c=m*100;
                document.getElementById("fah").value=c;
            }
            else if(pl=="Second"){
                var s=document.getElementById("cel").value;
                var m=s/60;
                document.getElementById("fah").value=m;
            }
            else if(pl=="Meter per second"){
                var s=document.getElementById("cel").value;
                var k=s*18/5;
                document.getElementById("fah").value=k;
            }
            else if(pl=="Liter"){
                var l=document.getElementById("cel").value;
                var m=l*1000;
                document.getElementById("fah").value=m;
            }

        }
        function u2()
        {
            var pl=document.getElementById("unit2").value;
            if(pl=="Fahrenheit"){
                var Fahrenheit=document.getElementById("fah").value;

                var Celsius=5/9*(Fahrenheit-32);
                document.getElementById("cel").value=Celsius;
           }
           else if(pl=="Square Foot"){
                var ft=document.getElementById("fah").value;
                var m=ft/10.764;
                document.getElementById("cel").value=m;
            }
            else if(pl=="Gram"){
                var g=document.getElementById("fah").value;
                var k=g/1000;
                document.getElementById("cel").value=k;
            }
            else if(pl=="Centimeter"){
                var c=document.getElementById("fah").value;
                var m=c/100;
                document.getElementById("cel").value=m;
            }
            else if(pl=="Minute"){
                var m=document.getElementById("fah").value;
                var s=m*60;
                document.getElementById("cel").value=s;
            }
            else if(pl=="Kilometer per hour"){
                var k=document.getElementById("fah").value;
                var s=k*5/18;
                document.getElementById("cel").value=s;
            }
            else if(pl=="Mililiter"){
                var m=document.getElementById("fah").value;
                var l=m/1000;
                document.getElementById("cel").value=l;
            }
        }