let currentDate = new Date();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let day = currentDate.getDay();
console.log(day);
let day_txt = '';
switch (day) {
    case 1: day_txt = 'Mon.'; break;
    case 2: day_txt = 'Tues.'; break;
    case 3: day_txt = 'Wed.'; break;
    case 4: day_txt = 'Thurs.'; break;
    case 5: day_txt = 'Fri.'; break;
    case 6: day_txt = 'Sat.'; break;
    case 7: day_txt = 'Sun.'; break;
}
let fulldate = day_txt + ' - ' +  date + '/' +  month + '/' + year;

console.log(fulldate);

const addNoteModal = new bootstrap.Modal('#exampleModal');

/*<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>02.03.2023</td>
    <td>New</td>
    <td>@User1</td>
</tr>*/
function addANote() {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let msecond = currentDate.getMilliseconds();

    let idKey = hour + '' + minute + '' + second + '' + msecond + '' + date + '' +  month + '' + year;

    const element_table_note = document.getElementById('table_note');
    const element_tr = document.createElement('tr');
    const element_note_number = document.createElement('th');
    const element_note = document.createElement('td');
    const element_note_date = document.createElement('td');
    const element_note_status = document.createElement('td');
    const element_note_creator = document.createElement('td');
    element_tr.appendChild(element_note_number);
    element_tr.appendChild(element_note);
    element_tr.appendChild(element_note_date);
    element_tr.appendChild(element_note_status);
    element_tr.appendChild(element_note_creator);
    element_table_note.appendChild(element_tr);

    element_tr.setAttribute('onclick', 'OptionSelected(this)');
    element_tr.setAttribute('onmouseover', 'renk(this)');
    element_tr.setAttribute('onmouseleave', 'renkReverse(this)');
    element_tr.id = 'note' + idKey;

    element_note.className = 'text-start';

    const element_addNoteInput = document.getElementById('addNoteInput');
    addCheckbox(element_note_number);
    element_note.innerText = element_addNoteInput.value;
    element_addNoteInput.value = null;
    element_note_date.innerText = fulldate;

    const element_note_status_icon = document.createElement('button');
    element_note_status_icon.type = 'button';
    element_note_status_icon.className = 'btn btn-sm btn-outline-primary disabled';
    element_note_status_icon.innerText = 'New';
    element_note_status.appendChild(element_note_status_icon);
    element_note_creator.innerText = '...';

    addNoteModal.hide();

}

const element_plusNewNote = document.getElementById('plusNewNote');
element_plusNewNote.addEventListener('click' , () => {
});

function addCheckbox (x) {

    const element_checkbox = document.createElement('div');
    const element_checboxInput = document.createElement("input");
    element_checboxInput.setAttribute('type', 'checkbox');
    element_checboxInput.className = 'form-check-input';
    element_checkbox.appendChild(element_checboxInput);
    x.appendChild(element_checkbox);
}

function OptionSelected (a) {
    alert(a.id);
    let selectedBoxID = a.id;

    const a_checkbox = a.children[0].children[0].children[0];
    if (a_checkbox.getAttribute('checked')) {
        a_checkbox.removeAttribute('checked');
    } else {
        a_checkbox.setAttribute('checked', 'true');
    }

    const completedButton = document.getElementById('completedButton');
    completedButton.addEventListener("click", () => {
        Complete(selectedBoxID);
    })

}

function Complete(a) {
    const selectedBox = document.getElementById(a);
    selectedBox.children[3].children[0].innerText = 'Completed';
    selectedBox.children[3].children[0].className = 'btn btn-sm btn-outline-success disabled';
    selectedBox.className = 'bg-success-subtle';
}

function Delete() {
    let notes_elements = [...document.getElementById('table_note').children];
    notes_elements = notes_elements.filter((a) => a.children[0].children[0].children[0].getAttribute('checked'));
    notes_elements.forEach((selectedBox) => {
        selectedBox.className = 'd-none';
    });
}

function renk(a) {
    a.className = a.className + ' ' + 'bg-dark-subtle';
    console.log(a);
}
function renkReverse(a) {
    a.className = a.className.split(' ').shift();
    console.log(a);
}