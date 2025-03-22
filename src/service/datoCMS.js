import axios from 'axios';

const endpoint = `${import.meta.env.VITE_API_URL}`;
const headers = {
	'content-type': 'application/json',
  'Authorization': `${import.meta.env.VITE_API_TOKEN}`
};


const graphqlQuery = {
    'query': `query {
      profile {
        id
        name
        title
        subtitle
        about
        photo {
          url
        }
        contactemail
        contactnumber
        curriculum
        phrase
        author
      }
      
      allProjects {
        id
        title
        description
        image {
          url
        }
        link
      }
      
      allSkills {
        id
        title
      }
      
      allSociallinks {
        id
        socialname
        iconimg {
          url
        }
        link
      }
    
      _allSociallinksMeta {
        count
      }
    }`,
    'variables': {}
};

const response = axios({
  url: endpoint,
  method: 'post',
  headers: headers,
  data: graphqlQuery
});

export const requestData = async () => {
  const { data } = await response;
  return data;
};