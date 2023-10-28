const fetchData = async (endpoint) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const fetchFinancialData = async () => {
    return fetchData('posts'); // Fetch posts data for this example
  };
  
  export const fetchUserData = async () => {
    return fetchData('users'); // Fetch users data for this example
  };
  