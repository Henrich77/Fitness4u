const planCreate = async (event) => {
    event.preventDefault()
    
    const plan_name = document.querySelector('#plan-name').value.trim();
    const first_workout = document.querySelector('#first-workout').value.trim();
    const second_workout = document.querySelector('#second-workout').value.trim();
    const third_workout = document.querySelector('#third-workout').value.trim();
    const fourth_workout = document.querySelector('#fourth-workout').value.trim();
    const fifth_workout = document.querySelector('#fifth-workout').value.trim();

    if (plan_name && first_workout && second_workout && third_workout) {
        const response = await fetch('/api/plans', {
            method: 'POST',
            body: JSON.stringify({ plan_name, first_workout, second_workout, third_workout, fourth_workout, fifth_workout}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            response.json()
        }
    }
};
  


const planUpdate = async (event) => {
    event.preventDefault()
    
    
    const plan_name = document.querySelector('#plan-name').value().trim();
    const first_workout = document.querySelector('#first-workout').value().trim();
    const second_workout = document.querySelector('#second-workout').value().trim();
    const third_workout = document.querySelector('#third-workout').value().trim();
    const fourth_workout = document.querySelector('#fourth-workout').value().trim();
    const fifth_workout = document.querySelector('#fifth-workout').value().trim();

    if (plan_name && first_workout && second_workout && third_workout) {
        const response = await fetch('/api/plans/:id', {
            method: 'PUT',
            body: JSON.stringify({ plan_name, first_workout, second_workout, third_workout, fourth_workout, fifth_workout}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            response.json()
        }
    }
};
  
const planDelete = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/projects/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to delete project');
        }
    }
};

const profileButton = async (event) =>
  
document.querySelector('#plan-delete').addEventListener('click', planDelete);

document.querySelector('#plan-update').addEventListener('click', planUpdate);

document.querySelector('#plan-create').addEventListener('click', planCreate);






