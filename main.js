const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team)


const members_list = document.getElementById("members")

for (let i = 0; i < team.length; i++) {
    let member = team[i]
    divElement = document.createElement('div')
    members_list.append(divElement)
    divElement.innerHTML = `<div class="card mb-5"><img class="card-img-top mb-3" src="./img/${member.image}"></img>
    <h4 class="text-center">${member.name}</h4>
    <p class="text-center">${member.role}</p></div>`

    console.log(member.name)
    console.log(member.role)
    console.log(member['image'])
    console.log('--------')

}