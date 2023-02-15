const planView = async () => {
    document.location.replace('/allplans')
};

document.querySelector('#show-plans').addEventListener('click', planView)

const myPlanView = async () => {
    document.location.replace('/myplans')
};

document.querySelector('#show-my-plans').addEventListener('click', myPlanView)

const specificPlanView = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/plans/${id}`, {
          method: 'GET',
        });
    
        if (response.ok) {
          document.location.replace('/')
        } else {
          alert('Failed to retrieve plan');
        }
    };
};

document.querySelector('.plan-reveal').addEventListener('click', specificPlanView);
