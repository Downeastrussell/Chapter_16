//String Test
function isString (value) {
    return typeof value === 'string' || value instanceof String;
    }
//Number Test
function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
    }
//Object Test
function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
    }
//Array Test
function isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;
    }
//Function Test
function isFunction (value) {
    return typeof value === 'function';
    }
//Null Test
function isNull (value) {
    return value === null;
    }
//Undefined Test
function isUndefined (value) {
    return typeof value === 'undefined';
    }
//Boolean Test
function isBoolean (value) {
    return typeof value === 'boolean';
    }




    function printDOM() {

    fetch("http://localhost:8088/employees?_expand=computer&&_expand=department", {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(employee => employee.json())
        .then(data => { data.forEach(x => {
            console.log(x)
            document.querySelector("#DOM").innerHTML+=`<article class="employee">
            <header class="employee__name">
                <h1>${x.name}</h1>
            </header>
            <section class="employee__department">
                ${x.department.name}
            </section>
            <section class="employee__computer">
                Is using computer number: ${x.computer.id} serial number: ${x.computer.serialNumber}
            </section>
        </article>`
        });

           console.log(data)
        })}

        printDOM();