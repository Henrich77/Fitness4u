const planView = async (event) => {
    if (event.target.hasAttribute('id')) {
        const id = event.target.getAttribute('id');
    
        const response = await fetch(`/api/plans`, {
          method: 'GET',
        });
    
        if (response.ok) {
          console.log('Thinking')
        } else {
          alert('Failed to get plan information');
        }
    }
};

document.querySelector('#show-plans').addEventListener('click', planView)