import React from "react";
import { motion as Motion } from "framer-motion";

const IndustryCard = ({ title, description, emailList, id }) => {
  return (
    <Motion.div
      id={id}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-xl rounded-2xl p-6 m-4 w-full max-w-5xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-3 text-blue-800">{title}</h2>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <h3 className="text-lg font-semibold mt-6 mb-2 text-blue-700">
        Industry Email List Includes:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {emailList.map((item, idx) => (
          <Motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg shadow text-sm"
          >
            {item}
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
};

const IndustryList = () => {
  const industries = [
    {
      id: "automobile",
      title: "Automobile/Automotive Email List",
      description:
        "Our comprehensive Automobile Industry Email and Mailing List is designed to help you target key players across the automotive sector, including automobile dealers, manufacturers, auto retailers, and more. This specialized list includes thousands of executives from diverse areas such as car washes, auto OEMs, automotive parts and accessories stores, repair and maintenance services, and beyond. Whether you're targeting decision-makers at the executive level or specific roles within the automobile industry, our list gives you direct access to the right contacts at every step of the ladder.Omnichannel marketing is essential for modern customer engagement, and Octane Data is here to help you leverage this strategy. By connecting with customers across multiple channels and devices, we offer a seamless experience throughout their journey. Our expert digital marketers are ready to guide you through every stage of email marketing, from campaign creation to performance tracking. As more companies adopt this approach to gather insights, create targeted campaigns, and measure real-time results, we’re confident your automotive business will benefit from these tailored solutions.",
      emailList: [
        "Automobile Dealers",
        "Automobile Rental & Leasing",
        "Tire Wholesalers and Dealers",
        "Automotive Repair & Maintenance Services",
        "Motor Vehicle Towing",
        "Auto Fabricated Metal Product Manufacturing",
        "Automotive Parts & Accessories Stores",
        "Auto Retail Sector",
      ],
    },
    {
      id: "banking",
      title: "Banking & Finance Email List",
      description:
        "Our Banking & Finance Email List provides a comprehensive set of marketing data, enabling you to connect with prospects via telephone, email, or direct mail. Reaching top-level decision-makers can often be challenging due to the layers of junior executives, but our refined data helps you cut through the noise and connect directly with the right people.Backed by a team of data scientists, analysts, and industry experts, we consistently gather and enhance the most authentic and reliable B2B data from diverse sources. This continuous effort ensures that you achieve higher response rates, increased conversion rates, and ultimately, a greater ROI.",
      emailList: [
        "Retail Banks",
        "Commercial Banks",
        "Accountants",
        "CFOs",
        "CSOs",
        "Mortgage Consultants",
        "Credit Unions",
        "Investment Firms",
      ],
    },
    {
      id: "construction",
      title: "Construction Industry Email List",
      description:
        "Our Construction Email List is the perfect tool for reaching the right audience in the construction industry. With access to hundreds of thousands of construction contacts, you’re sure to find the ideal prospects for your business. We understand that identifying the right contractors or construction companies can be challenging, which is why we’ve streamlined the process with our comprehensive construction mailing list. You can easily filter the list by job title, company size, location, and more, allowing you to target the most relevant prospects for your campaigns.Designed to support your multi-channel marketing strategies, our Construction Industry Mailing List helps you engage with the right market effectively. With Octane Data's Construction Companies Email Addresses, you can ensure seamless communication with your target audience, improving both your conversion rates and ROI. Our extensive network of data partners allows us to serve you without geographical limitations, offering both pre-packaged and customized Construction Companies Email Lists tailored to your specific needs.Get the precise construction email lists you need to contact construction businesses and contractors right away. With our CASS-certified construction lists, you can build a highly effective B2B marketing campaign. Octane Data’s construction companies list is fully opt-in and reliable, guaranteeing maximum return on investment from your marketing efforts.",
      emailList: [
        "Residential Building",
        "Architecture & Construction",
        "Estate Agents and Brokers",
        "Infrastructure Companies",
        "Real Estate Engineers",
        "HVAC Contractors",
        "Project Management",
        "Industrial Construction",
      ],
    },
    {
      id: "education",
      title: "Education Industry Email List",
      description:
        "Our Education Industry Email List offers the highest quality information, enabling you to connect with your most important target prospects. A well-structured Education Services Mailing List helps shorten the waiting period to convert prospects, significantly enhancing your business’s efficiency. It provides comprehensive details on senior executives, ensuring your campaign stays focused and on track. Whether you’re running email marketing or telemarketing campaigns, our education industry email list is the ideal tool to reach qualified decision-makers.Email marketing is an essential communication method for top-ranking decision-makers at universities, management schools, colleges, and other educational institutions. As educational organizations tailor their marketing strategies, complementing your campaign with Octane Data's Education Industry Executives Marketing List can help you forge the right partnerships.Our education industry email list offers in-depth data, enabling marketers to create a more precise and comprehensive profile of their target audience. With the globalization of education, institutions worldwide are collaborating to provide high-quality education. Our list ensures you connect with the right individuals in the education sector. From industry-oriented educational programs to partnerships between multinational companies and universities, our list empowers you to engage with the key players shaping the future of education.",
      emailList: [
        "     Catholic Schools",
        " Medical Schools",
        "  Christian Schools",
        " Middle Schools",
        "  Private Colleges",
        "    Religious Schools",
        " Dental Schools",
        "Elementary Schools",
        " Kindergarten Schools",
        "   School Lists",
        " Email List of Teachers",
        "  Nursing Schools",
        " College Data",
        "School Administrators",
        " Private Schools",
        "   Public Schools",
        "Charter Schools",
        " School Districts",
        "Boarding Schools",
        "Magnet Schools",
        " Military Schools",
      ],
    },
    {
      id: "food-bev",
      title: "Food and Beverage Email List",
      description:
        "Get a tailored Food and Beverage Email Mailing List, Food Manufacturers & Processing Email List, and an F&B industry marketing database designed to help you connect with executives and decision-makers across the US, UK, Canada, Europe, Australia, Middle East, South Africa, and Asia. Whether you're planning email marketing or telemarketing campaigns, our food and beverage email list is the ideal tool to target qualified professionals in the industry.To support effective campaign execution, Octane Data provides a robust Food Manufacturers Mailing List. This list offers comprehensive marketing details, enabling you to reach your target audience through phone, email, or direct mail. The future is promising for F&B equipment manufacturers, product/service providers, and other industry supporters, whether they are directly or indirectly involved in the sector.We offer both pre-packaged and customized lists to help you maximize the impact of your marketing efforts. With our lists, you’ll be empowered to make more informed decisions and engage with the right audience. Whether you’re a food and beverage producer, a service provider, or a business supporting the industry, our food and beverage database gives you the tools needed to close deals and drive growth.",
      emailList: [
        "Alcohol Beverages",
        "Meat, Poultry & Seafood",
        "Food Retailers",
        "Grocery Stores",
        "Dairy and Dairy Products",
        "F&B Wholesalers",
        "Machinery & Suppliers",
        "Exporters & Importers",
        "Packaging Companies",
        "Processing Companies",
        "Winery-Vineyards",
        "Confectionery Stores",
        "Food Suppliers",
        "Food Warehousing",
        "Retail & Distribution",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare Industry Email List",
      description:
        "The healthcare industry is one of the largest and fastest-growing sectors globally, with rapid expansion expected in the coming years. Both private and public sectors are contributing to this growth, driven by new opportunities, innovations, and evolving government policies and regulations. The dynamic nature of the healthcare sector presents tremendous business prospects, making it crucial to connect with key healthcare decision-makers for sustained growth and success.Our Healthcare Email List offers a 95% deliverability rate, giving you access to the contact information of top medical professionals, enabling you to execute highly successful marketing campaigns. The list includes a variety of detailed selects such as phone numbers, fax numbers, email addresses, locations, job titles, industry types, company names, NAICS and SIC codes, and more.To ensure the highest data quality, our dedicated team of data experts and analysts regularly verifies and updates our Healthcare Mailing Database. We employ a combination of manual checks and advanced tools to validate the authenticity of our data and correct any discrepancies.With our real-time, validated Healthcare Industry Mailing List, you can efficiently target purchase-intent leads, boost your ROI, and reach your ideal market. Whether you're focusing on general or niche healthcare industries, we provide you with the necessary healthcare databases and SIC codes to ensure your marketing messages reach the right audience.",
      emailList: [
        "Offices and Clinics of Doctors of Medicine",
        "Offices and Clinics of Dentists",
        "Offices and Clinics of Health Practitioners",
        "Skilled Nursing Care Facilities",
        "Residential Care",
        "Medical Laboratories",
        "General Medical and Surgical Hospitals",
        "Specialty Outpatient Facilities",
        "Health and Allied Services",
        "Prosthetic Surgical Supplies",
      ],
    },
    {
      id: "manufacturing",
      title: "Manufacturing Industry Email List",
      description:
        "Our Manufacturing Email List is filled with verified contacts of top-level executives from leading manufacturing companies, making it easy for you to connect with the right decision-makers. This highly accurate and extensively verified list, complete with CASS certification, is designed to support your email marketing and telemarketing campaigns, ensuring you reach qualified prospects in the manufacturing sector. Buy this valuable resource at an affordable price, and start building meaningful business relationships. For more information, reach out to Octane Data.Manufacturing plays a pivotal role in the global economy, with the U.S. contributing significantly to world output. The U.S. alone produces 18.2% of the world’s goods, surpassing the combined economic output of nations like Korea, Canada, or Mexico. This immense contribution presents countless opportunities for marketers to promote or sell their offerings to manufacturers in the U.S. and other countries where manufacturing remains a key economic driver.Our manufacturers' contact list is updated regularly, ensuring that you’re always reaching out to active industry professionals. This guarantees that your marketing messages will be directed at the right audience, increasing your chances of success in the manufacturing sector.",
      emailList: [
        "Food and Beverage",
        "Medical Devices/Equipment",
        "Paper and Paper Products",
        "Machinery and Equipment",
        "Rubber and Plastic",
        "Metal Industry",
        "Textile & Fabric",
        "Lumber & Wood Production",
        "Printing and Publishing",
        "Wineries/Distillers/Brewers",
        "Chemical",
        "Electronics",
        "Clay and Glass Industry",
        "Leather Products",
        "Automotive",
        "Plumbing & HVAC Equipment",
        "Mining, Oil & Gas Equipment",
        "Petrochemicals",
        "Metal Fabrication Industry",
        "Apparel & Footwear Industry",
      ],
    },
    {
      id: "oil-gas",
      title: "Oil and Gas Email Industry List",
      description:
        "With our comprehensive Oil and Gas Email List, you can create powerful, industry-leading email marketing campaigns and connect with key decision-makers across the sector. Our Oil and Gas Mailing List is carefully researched and segmented to provide accurate and up-to-date contact information. Regularly updated, this list ensures that you have access to valuable insights regarding customer demands and satisfaction, making it an essential tool for your email marketing or telemarketing efforts.The Oil & Gas industry includes companies involved in the extraction, drilling, and refining of oil and gas products. Whether you're looking to connect with industry leaders, suppliers, or service providers, our email list is the perfect solution to reach decision-makers within this vital sector. Octane Data compiles this data from trusted sources such as business directories, trade shows, corporate websites, press releases, and more, ensuring accuracy and relevance. The list can also be tailored to your specific campaign needs.Our Oil and Gas Industry Contact List is the result of extensive research, strict verification, and continuous data enhancement, ensuring the highest quality. Clients who use our list experience higher success rates in their campaigns, with seamless interactions and more meaningful connections with their target audience. Understanding that every organization has unique marketing goals, we offer both pre-packaged and customized Oil and Gas Mailing Lists that align with your specific campaign strategies to deliver optimal results.Our Oil and Gas Email List is designed to meet the needs of marketers, giving you complete access to essential contact information, enabling you to connect via email, telephone, or direct mail.",
      emailList: [
        "Gas Stations",
        "Oil & Gas Industry",
        "Oil Drilling",
        "Petroleum Refineries",
        "Mining",
        "Natural Gas Transmission",
        "Irrigation Systems Industry",
        "Upstream & Midstream Sectors",
        "Natural Gas Distribution",
        "Machinery and Equipment",
        "Coal Underground Mining",
        "Oil and Gas Field Exploration",
      ],
    },
    {
      id: "pharma",
      title: "Pharmaceutical Industry Email List",
      description:
        "Finding the right prospects and building a niche client base in the pharmaceutical industry can be challenging without the right tools. Revenue generation becomes significantly easier when you leverage our comprehensive pharmaceutical mailing database. With our pre-packaged and customizable email lists, you can connect with top executives in the pharma sector across the US, Canada, UK, Australia, EMEA, APAC, and more. Utilize our B2B email list for multi-channel targeted marketing campaigns, ensuring global brand visibility and establishing meaningful connections.If you're searching for the most effective Pharmaceutical Executives Mailing List, Octane Data is your go-to solution. Our email database is verified and continuously enhanced by our dedicated marketing team to provide you with the most accurate and up-to-date information.The pharmaceutical industry is one of the world's largest and most essential sectors, providing life-saving medicines and therapies that improve lives globally. Reach key decision-makers such as managers, directors, and other influential figures in this vast field with our pharmaceutical email list. By targeting the right individuals in the industry, your products and services will be delivered exactly where they are needed.Our pharmaceutical email database is designed to boost your campaign’s success by helping you generate more leads and sales. Whether you're looking to connect with top decision-makers, medical professionals, or medical supply companies, our B2B email list will assist you in reaching the right audience. Our expert data analysis team gathers the most reliable and accurate data from trustworthy sources, ensuring timely delivery to help you reach your goals.",
      emailList: [
        "Clinical Pharmacists",
        "Industry Pharmacists",
        "Medical Pharmacists",
        "Retail Pharmacists",
        "Hospital Pharmacists",
        "Community Pharmacy",
        "Registered Pharmacists",
        "Compounding Pharmacists",
        "Nuclear Pharmacists",
        "Home Care Pharmacists",
        "Pharmacy Managers",
        "Pharmaceutical Pharmacists",
        "Ambulatory Care Pharmacists",
        "Critical Care Pharmacists",
        "Hospital Pharmacy Executives",
        "Managed Care Pharmacists",
        "Consulting Pharmacists",
        "Oncology Pharmacists",
        "Pediatric Pharmacists",
        "Online Pharmacies",
      ],
    },
    {
      id: "real-estate",
      title: "Real Estate Industry Email List",
      description:
        "Maximize your conversion and response rates with our meticulously crafted real estate email addresses. Our Real Estate Industry Email List is sourced from credible platforms and is verified multiple times to ensure high email deliverability. We maintain the freshness of the database with real-time updates, ensuring that only permission-passed email contacts are included. This makes our email list the perfect tool for your email marketing or telemarketing campaigns, helping you reach qualified decision-makers in the real estate industry.Octane Data’s Targeted Real Estate Contact Lists are designed to connect you with your most valuable prospects via email, telephone, or direct mail. Whether you're marketing products, solutions, or services in the USA, UK, Canada, Europe, Asia, North America, Australia, or any major country, our comprehensive list of realtors will help you achieve superior results with your multi-channel campaigns.Our real estate email database offers a one-stop solution for all your marketing needs, providing you with direct access to realtors, property managers, and other professionals in the real estate sector. This allows you to optimize your resources and maintain a targeted Real Estate Mailing List for executing successful marketing campaigns.We offer marketers a high-quality Real Estate Agents Email List, which is ideal for launching campaigns that target key decision-makers. With our comprehensive database, you'll be able to tap into new opportunities in the real estate and construction sectors, ultimately boosting your revenue and expanding your business reach.",
      emailList: [
        "Real Estate Executives",
        "Real Estate Investors",
        "Residential Real Estate Professionals",
        "Real Estate Developers",
        "Real Estate Loan Officers",
        "Real Estate Attorneys",
        "Real Estate Consultants",
        "Leasing Consultants",
        "Real Estate Agents",
        "Commercial Real Estate Agents",
        "Property Management Professionals",
        "Real Estate Industry Executives",
        "Real Estate Contractors",
        "Industrial Real Estate Professionals",
        "Real Estate Engineers and Designers",
        "Real Estate Marketing Managers",
        "Mortgage Brokers",
      ],
    },
    {
      id: "retail",
      title: "Retail Industry Email List",
      description:
        "Reaching decision-makers within the retail industry can be challenging, especially when you're targeting specific sectors such as retail business owners and executives. When you need precise contact information for these key individuals, a specialized and highly targeted email list becomes crucial. Octane Data provides a tailored Retail Industry Mailing List, designed to enhance your marketing efficiency and strategy by offering real-time, updated contact details for professionals across the retail sector.The retail industry is one of the most dynamic and rapidly growing industries globally. It includes a wide range of businesses, both online and offline, that sell goods and services directly to the public. These retail businesses can range from large department stores to small niche boutiques, making it a crucial sector for any business that is looking to expand its reach.Whether you manage a wholesale business, provide services for retailers, or are looking to build partnerships, connecting with the right decision-makers in the retail industry is essential. Octane Data's Retail Industry Email List gives you access to key contacts within this thriving sector, offering full contact details to streamline your marketing campaigns and foster valuable business relationships.Our email lists are meticulously curated and updated to ensure that your marketing efforts reach the most relevant prospects. Whether you’re looking to expand your customer base, generate quality leads, or increase your sales and ROI, our Retail Industry Email List offers you the necessary tools to achieve success. You can also customize your list to focus on specific niches within the retail sector for targeted outreach.",
      emailList: [
        "Grocery Stores",
        "Consumer Goods and Services",
        "Jewelry Stores",
        "Convenience Stores and Gas Stations",
        "Sporting Goods Store",
        "Apparel and Accessory Stores",
        "Furniture Stores",
        "Home Improvement Stores",
        "Office Products",
        "Retail Trade Industry Professionals",
        "Car & Truck Rental and Leasing",
        "Department Stores",
        "General Merchandise Stores Executives",
        "Retail Industry Database",
        "Automobile Parts Stores",
        "Rental & Leasing Services",
        "Miscellaneous Retail Executives",
        "Florists and Gift Stores",
        "Consumer Electronics Retailers",
      ],
    },
    {
      id: "travel",
      title: "Travel & Transportation Industry Email List",
      description:
        "Boost your marketing efforts with our 100% privacy-compliant Travel & Transportation Email List, designed to target key decision-makers within the travel, tourism, and transportation industries. Our comprehensive and updated email database enables you to efficiently engage prospects and acquire new clients, driving your business growth through data-driven, account-based marketing strategies.Travel & Tourism is one of the world’s fastest-growing and most dynamic industries. Whether you're targeting travel agency professionals, transportation companies, or logistics providers, reaching out to the right people within this industry is essential for success. With Octane Data's Travel Agency Email List, you gain access to up-to-date, high-quality marketing information that will power your multi-channel marketing initiatives and connect you with the right industry experts.We have built a robust network of data partners across North America, Europe, Asia, Australia, New Zealand, Africa, the Middle East, and South America, enabling us to provide global coverage while maintaining a local touch. Our team of data experts, professionals, and analysts continuously updates and validates the Travel Agents Mailing List to ensure that it remains accurate and error-free. We are committed to the success of our clients, and our goal is to ensure measurable success in your marketing campaigns.To help marketers carve a unique space in the highly competitive travel and transportation market, Octane Data offers tailored Travel & Transportation Mailing Lists to achieve better engagement and higher ROI.",
      emailList: [
        "Logistic Services Sales Leads",
        "Travel Agents",
        "Trucking Companies",
        "Car Dealers",
        "Importers Email Addresses",
        "Transportation Industry Executives",
        "Aerospace & Defense Professionals",
        "Air Transportation Services",
        "Boats & Submarines",
        "Freight & Logistics Services",
        "Rail, Bus & Taxi Services",
        "Shipping & Transportation",
        "Trucking, Moving & Storage",
      ],
    },
  ];
  const scrollToIndustry = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -220;
      const top =
        section.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-10">
          Industry Lists
        </h1>

        {/* Sticky Button Section */}
        <div className="sticky top-[64px] z-50 bg-gray-100 py-3 px-4 shadow-md overflow-x-auto">
          <div className="flex w-max sm:w-auto flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => scrollToIndustry(industry.id)}
                className="whitespace-nowrap bg-white text-black text-sm px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-200"
              >
                {industry.title.split(" Email List")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              id={industry.id}
              title={industry.title}
              description={industry.description}
              emailList={industry.emailList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryList;
