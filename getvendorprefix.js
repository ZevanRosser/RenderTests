//Lea Verou's getVendorPrefix()
//I DO NOT OWN THIS CODE IN, NO WARRANTY EXPRESSED NOR IMPLIED
//THE OWNER OF THIS CODE IS LEA VEROU AND CAN BE OBTAINED AT http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
//Thanks Lea, if you ever see this!!
 
function getVendorPrefix()
{
    if('result' in arguments.callee) return arguments.callee.result;
    
    var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
    
    var someScript = document.getElementsByTagName('script')[0];
    
    for(var prop in someScript.style)
    {
        if(regex.test(prop))
        {
            // test is faster than match, so it's better to perform
            // that on the lot and match only when necessary
            return arguments.callee.result = prop.match(regex)[0];
        }
        
    }
    
    // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
    // However (prop in style) returns the correct value, so we'll have to test for
    // the precence of a specific property
    if('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
    if('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';
    
    return arguments.callee.result = '';
}