import './styles/colors.css';
import './styles/global.css';
import './styles/components/Loading.css';
import './styles/components/Header.css';
import './styles/components/Banner.css';
import './styles/components/About.css';
import './styles/components/Projects.css';
import './styles/components/Contact.css';
import './styles/components/Footer.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import { requestData } from './service/datoCMS';
import Loading from './components/Loading';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await requestData();
      setData(result.data);
      setLoading(false);
    } catch (error) {
      setData(false);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading || !data) {
    return <Loading />;
  }
  console.log(data);
  return (
    <>
      <Header />
      <Banner
        name={ data.profile.name }
        title={ data.profile.title }
        subTitle={ data.profile.subtitle }
        photo={ data.profile.photo }
        socialLinks={ data.allSociallinks }
      />
      <About
        aboutText={ data.profile.about }
        curriculum={ data.profile.curriculum }
        skills={ data.allSkills }
      />
      <Projects
        projects={ data.allProjects }
      />
      <Contact
        phoneNumber={ data.profile.contactnumber }
        email={ data.profile.contactemail }
      />
      <Footer
        name={ data.profile.name }
        phoneNumber={ data.profile.contactnumber }
        email={ data.profile.contactemail }
        socialLinks={ data.allSociallinks }
        phrase={ data.profile.phrase }
        author={ data.profile.author }
      />
    </>
  );
}

export default App;
