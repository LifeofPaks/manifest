import React from "react";
import T1 from "../../assets/team/t1.png";
import T2 from "../../assets/team/t2.png";
import T3 from "../../assets/team/t3.png";

const Team = () => {
  const teamMembers = [
    {
      image: T1,
      icon: (
        <div className="bg-white p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#FC8019"
            />
          </svg>
        </div>
      ),
      name: "Babatope Olajide",
      position: "Salesforce Application Architect",
    },
    {
      image: T2,
      icon: (
        <div className="bg-white p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#FC8019"
            />
          </svg>
        </div>
      ),
      name: "Florence Onanuga",
      position: "Salesforce Delivery Project Manager",
    },
    {
      image: T3,
      icon: (
        <div className="bg-white p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#FC8019"
            />
          </svg>
        </div>
      ),
      name: "Vivian Ufodike",
      position: "Salesforce Consultant",
    },
  ];

  const teamMembers2 = [
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Emilia Anochirionye",
      position: "Salesforce Developer",
      desc: "An IT Professional with 10+ years of experience in the IT industry. Passionate about implementing software solutions that help organizations meet their business automation needs. Experience in system analysis, database design, application support, Mentorship, root-cause analysis and salesforce Administration.",
    },
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Obiora Nwachukwu",
      position: "Salesforce Consultant",
      desc: "A dynamic and collaborative Salesforce Professional, with remarkable experience in Successfully optimizing and delivering business solutions. excellent in sales and service cloud applications, and Customer Success Management.",
    },
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Doris Ogbo.",
      position: "Salesforce Business Analyst",
      desc: "As a Certified Business Analyst professional with experience in Requirement Gathering, Document Analysis, and Business process mapping within Agile environments. She consults for small businesses looking to transition into Salesforce CRM for the improvement of their Business processes.",
    },
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Anthony Olasinde.",
      position: "Salesforce Developer",
      desc: "Over 5 years of IT experience and 3 years as a Certified Salesforce.com Platform Developer and excellent experience as Salesforce Admin as well. Proficient in coding and programming, experienced in upgrading, modifying, and integrating systems. Adept at developing, designing, and testing applications and modules.",
    },
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Samuel Nwoko",
      position: "Salesforce Developer",
      desc: "Specialize in Development, implementation including configuration and database activities. Implemented Security and Sharing rules at object, field and record level for different users at different levels of the organization. Salesforce Technologies Apex Classes and Triggers, VisualForce (Pages, Components), Lightning Pages, Controllers, Controller Extensions, Workflow & Approvals, Docusign",
    },
    {
      icon: (
        <div className="bg-[#FC8019] p-1 w-[50px] h-[50px] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M5.24875 20.9665V7.46009H0.763405V20.9665H5.24922H5.24875ZM3.00701 5.61633C4.57082 5.61633 5.54439 4.57919 5.54439 3.28307C5.51512 1.95741 4.57082 0.949219 3.03675 0.949219C1.50163 0.949219 0.499023 1.95741 0.499023 3.28295C0.499023 4.57908 1.47225 5.61621 2.97763 5.61621H3.00666L3.00701 5.61633ZM7.73145 20.9665H12.2164V13.4247C12.2164 13.0216 12.2457 12.6174 12.3642 12.3295C12.6883 11.5226 13.4263 10.6874 14.6657 10.6874C16.2882 10.6874 16.9377 11.9259 16.9377 13.7417V20.9665H21.4226V13.2223C21.4226 9.07392 19.2101 7.14344 16.2592 7.14344C13.8399 7.14344 12.7773 8.49687 12.1869 9.41869H12.2168V7.46056H7.73169C7.79023 8.72762 7.73134 20.967 7.73134 20.967L7.73145 20.9665Z"
              fill="#fff"
            />
          </svg>
        </div>
      ),
      name: "Paul Faseyi",
      position: "Technical Support",
      desc: "Personable and knowledgeable IT support technician with over 4 years of experience assisting customers with various hardware and software related issues. Paul is responsible for the set-up, implementation and maintenance of the system and IT process at Manifest & Company",
    },
  ];
  return (
    <div className="max-w-[1400px] !mx-auto !py-12" id="team">
      <h1 className="text-[#0B1533] text-center text-[32px] font-semibold leading-[40px] uppercase">
        MEET THE TEAM
      </h1>
      <p className="text-[#101010] text-center lg:text-[18px] font-normal leading-[32px] !px-4 lg:!px-0 !mt-4 !mx-auto lg:w-[1100px]">
        We have a team that comprises of Engineers, Developers and Consultants.
        The team has over 20+ Salesforce Certifications including Application
        Architect and Experience Cloud. The least experience of our team member
        has over 5 years in Technology.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 !mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-white  rounded-[50px] shadow-lg border-[4px] border-[#FF9F4E] flex flex-col bg-[#FC8019] "
          >
            <img
              className="w-[400px] h-[550px] object-cover !mb-4 rounded-tl-[50px] rounded-tr-[50px] "
              src={member.image}
              alt="team"
            />
            <div className="!p-8 flex items-center gap-2">
              <div className="">{member.icon}</div>
              <div>
                <h2 className="text-[24px] font-bold uppercase">
                  {member.name}
                </h2>
                <p className="text-[14px] text-[#101010]">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center !mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 !mt-8 !px-4 lg:px-0">
          {teamMembers2.map((member, index) => (
            <div
              key={index}
              className="text-white rounded-lg shadow-lg !p-6 flex flex-col bg-[#101010] h-[300px] w-[400px]"
            >
              <div className="flex items-center gap-4">
                <div className="">{member.icon}</div>
                <div>
                  <h2 className="text-[20px] font-semibold !mb-1">
                    {member.name}
                  </h2>
                  <p className="text-[17px] text-[#ABBCD5]">
                    {member.position}
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-[#ABBCD5] !mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
