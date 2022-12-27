const app = Vue.createApp({
        data() {
            return {
                firstName : 'Rasel',
                lastName  : 'Ahmed',
                email     : 'raselahmed7@gmail.com',
                gender    : 'male',
                picture   : 'https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/311574431_5947747548576741_5286969297824427313_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeb6QDMeNuZh8s44StqqalNeJ3Cg1oco414ncKDWhyjvjcFPv1HH_4u1SnPAP2Jn9cPa0oSWlaliUxIvGeAQX0&_nc_ohc=JL2wxY278zAAX9of25O&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfD1wfuF_KXyEd_1fBV5vCUfUG7aHr12oKIX8QJvZ_AxQg&oe=63ADF8BE',
            }
        },

        methods:{
           async getUser(){
            let user = await fetch('https://randomuser.me/api');

            let {results} = await user.json();

                this.firstName = results[0].name.first;
                this.lastName  = results[0].name.last;
                this.email     = results[0].email;
                this.gender    = results[0].gender;
                this.picture   = results[0].picture.medium;
            }
        }
});

app.mount('#app');