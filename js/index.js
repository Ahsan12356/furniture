const sectsArr = ['Home', 'About', 'Categories', 'Top Customers', 'Brands', 'Visit'];

const hmBrgr = document.querySelector('#hamburger-btn');

const section = document.createElement('section');
const lst = document.createElement('ul');

const closeBtn = document.createElement('img');

function hmbrgrPressed() {
  if (document.URL.includes('about.html')) {
    sectsArr[2] = 'Contact';
  }

  section.className = 'menu-btn';
  closeBtn.src = 'images/close-icn.png';
  closeBtn.style.position = 'absolute';
  closeBtn.style.width = '48px';
  closeBtn.style.height = '48px';
  section.appendChild(closeBtn);
  function closeView() {
    section.removeChild(closeBtn);
    section.removeChild(lst);
    for (let i = 0; i < lst.length; i += 1) {
      lst.removeChild(lst.querySelector('li'));
    }
    document.body.removeChild(section);
  }
  closeBtn.addEventListener('click', closeView);
  lst.className = 'hmbrgrlst';
  lst.innerHTML = `<li><a href="index.html#hero">${sectsArr[0]}</a></li>`
    + `<li><a href="about.html">${sectsArr[1]}</a></li>`
    + `<li><a href="#${sectsArr[2].toLowerCase()}">${sectsArr[2]}</a></li>`
    + `<li><a href="#tstmons">${sectsArr[3]}</a></li>`
    + `<li><a href="#brands">${sectsArr[4]}</a></li>`
    + `<li><a href="#wrhs">${sectsArr[5]}</a></li>`;
  const lnk = lst.querySelectorAll('li');
  lnk.forEach((btn) => {
    btn.addEventListener('click', closeView);
  });
  section.appendChild(lst);
  document.body.appendChild(section);
}

hmBrgr.addEventListener('click', hmbrgrPressed);

const customers = [
  {
    customerName: 'Yochai Benkler',
    customerComments: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
    img_src: 'images/customer1.png',
    customerDesignation: 'Professor at Harvard Law School',
  },
  {
    customerName: 'Kilnam Chon',
    customerComments: "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
    img_src: 'images/customer2.png',
    customerDesignation: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
  },
  {
    customerName: 'Sohyeong Noh',
    customerComments: "As the author of , he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
    img_src: 'images/customer3.png',
    customerDesignation: 'Art Center Nabi Director, CC Korea Director',
  },
  {
    customerName: 'Julia Reda',
    customerComments: "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's copyright law in July.",
    img_src: 'images/customer4.png',
    customerDesignation: 'Head of the Young Pirates of Europe',
  },
  {
    customerName: 'Lila Tretikov',
    customerComments: "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
    img_src: 'images/customer5.png',
    customerDesignation: 'Secretary General of the Wikimedia Foundation',
  },
  {
    customerName: 'Ryan Merkley',
    customerComments: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
    img_src: 'images/customer6.png',
    customerDesignation: 'Creative Commons CEO, Former Mozilla Foundation COO',
  },
];

function populateCustomers() {
  if (!document.URL.includes('about.html')) {
    const sect = document.querySelector('.tstmons');
    const ul = sect.querySelectorAll('ul')[0];
    const li = ul.querySelectorAll('li.mn');
    for (let i = 0; i < li.length; i += 1) {
      li[i].querySelector('img').src = customers[i].img_src;
      li[i].querySelector('img').alt = customers[i].customerName;
      const subul = li[i].querySelector('ul');
      const sublis = subul.querySelectorAll('li');
      sublis[0].querySelector('h4').innerText = customers[i].customerName;
      sublis[1].querySelector('h6').innerHTML = customers[i].customerDesignation;
      sublis[2].querySelector('p').innerHTML = customers[i].customerComments;
    }
    const d = new Date();
    const dh3 = document.querySelector('.current-time');
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dh3.innerHTML = `${d.getFullYear()}.${d.getMonth()}.${d.getDate()} (${weekday[d.getDay()]})  '~  (${weekday[d.getDay() + 1]})`;
  }
}
document.addEventListener('DOMContentLoaded', populateCustomers);
