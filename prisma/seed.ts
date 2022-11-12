import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const languages = [
  {
    name: "JavaScript",
  },
  {
    name: "Python",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Ruby",
  },
  {
    name: "Java",
  },
];

const tools = [
  {
    name: "React",
  },
  {
    name: "Sass",
  },
  {
    name: "Django",
  },
  {
    name: "Vue",
  },
  {
    name: "Ruby on Rails",
  },
  {
    name: "RoR",
  },
  {
    name: "Spring",
  },
  {
    name: "Ruby",
  },
];

const companies = [
  {
    name: "Photosnap",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416885/companies/photosnap_e4f7mt.svg",
    location: "New York, NY",
  },
  {
    name: "Manage",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416883/companies/manage_g9i0bo.svg",
    location: "London",
  },
  {
    name: "Account",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416885/companies/account_shlyis.svg",
    location: "New York, NY",
  },
  {
    name: "MyHome",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416885/companies/myhome_ktpkak.svg",
    location: "London",
  },
  {
    name: "Loop Studios",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416883/companies/loop-studios_gemci2.svg",
    location: "Chicago, IL",
  },
  {
    name: "FaceIt",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416883/companies/faceit_a4rdfd.svg",
    location: "London",
  },
  {
    name: "Shortly",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416885/companies/shortly_hjop6t.svg",
    location: "New York, NY",
  },
  {
    name: "Insure",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416883/companies/insure_dpcw2j.svg",
    location: "London",
  },
  {
    name: "Eyecam Co.",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416883/companies/eyecam-co_xuqzxn.svg",
    location: "San Francisco, CA",
  },
  {
    name: "The Air Filter Company",
    logo: "https://res.cloudinary.com/dh9odtpzm/image/upload/v1667416885/companies/the-air-filter-company_bvmymt.svg",
    location: "New York, NY",
  },
];

async function seed() {
  await prisma.company.deleteMany();
  await prisma.language.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.jobPost.deleteMany();

  await prisma.tool.createMany({
    data: tools,
  });

  await prisma.language.createMany({
    data: languages,
  });

  await prisma.jobPost.create({
    data: {
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      contractType: "Full Time",
      location: "USA Only",
      company: {
        create: companies[0],
      },
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
          {
            name: "HTML",
          },
          {
            name: "CSS",
          },
        ],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      contractType: "Part Time",
      location: "Remote",
      languages: {
        connect: [
          {
            name: "Python",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "React",
          },
        ],
      },
      company: {
        create: companies[1],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      contractType: "Part Time",
      location: "USA Only",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "React",
          },
          {
            name: "Sass",
          },
        ],
      },
      company: {
        create: companies[2],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      contractType: "Contract",
      location: "USA Only",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
          {
            name: "CSS",
          },
        ],
      },
      company: {
        create: companies[3],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      contractType: "Full Time",
      location: "Worldwide",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "Ruby",
          },
          {
            name: "Sass",
          },
        ],
      },
      company: {
        create: companies[4],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      contractType: "Full Time",
      location: "UK Only",
      languages: {
        connect: [
          {
            name: "Ruby",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "RoR",
          },
        ],
      },
      company: {
        create: companies[5],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      contractType: "Full Time",
      location: "Worldwide",
      languages: {
        connect: [
          {
            name: "HTML",
          },
          {
            name: "JavaScript",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "Sass",
          },
        ],
      },
      company: {
        create: companies[6],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      contractType: "Full Time",
      location: "USA Only",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "Sass",
          },
          {
            name: "Vue",
          },
        ],
      },
      company: {
        create: companies[7],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      contractType: "Full Time",
      location: "Worldwide",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
          {
            name: "Python",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "Django",
          },
        ],
      },
      company: {
        create: companies[8],
      },
    },
  });

  await prisma.jobPost.create({
    data: {
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      contractType: "Part Time",
      location: "Worldwide",
      languages: {
        connect: [
          {
            name: "JavaScript",
          },
        ],
      },
      tools: {
        connect: [
          {
            name: "React",
          },
          {
            name: "Sass",
          },
        ],
      },
      company: {
        create: companies[9],
      },
    },
  });
}

seed();
