const planView = async () => {
    document.location.replace('/')
};

document.querySelector('#show-plans').addEventListener('click', planView)

const myPlanView = async () => {
    document.location.replace('/myplans')
};

document.querySelector('#show-my-plans').addEventListener('click', planView)