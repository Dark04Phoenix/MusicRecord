const baseUrl = "https://musicrecordsopg.azurewebsites.net/api/MusicRecord";

Vue.createApp({
    data() {
        return {
            musicRecords: [],
            getByIdId: -1,
            singleMusicRecord: null,
            deleteId: 0,
            deleteMessage: "",
            addData: { title: "", artist: "", duration: 0, publicationYear: 0 },
            addMessage: "",
            updateData: { id: 0, title: "", artist: "", duration: 0, publicationYear: 0 },
            updateMessage: ""
        };
    },
    methods: {
        async getMusicRecords() {
            try {
                const response = await axios.get(baseUrl);
                this.musicRecords = response.data;
            } catch (ex) {
                alert(ex.message);
            }
        },

        getAllMusicRecords() {
            this.getMusicRecords();
        },

        // async getById(id) {
        //     const url = `${baseUrl}/${id}`;
        //     try {
        //         const response = await axios.get(url);
        //         this.singleMusicRecord = response.data;
        //     } catch (ex) {
        //         alert(ex.message);
        //     }
        // },

        // async deleteMusicRecord(deleteId) {
        //     const url = `${baseUrl}/${deleteId}`;
        //     try {
        //         const response = await axios.delete(url);
        //         this.deleteMessage = `Response: ${response.status} ${response.statusText}`;
        //         this.getAllMusicRecords();
        //     } catch (ex) {
        //         alert(ex.message);
        //     }
        // },

        // async addMusicRecord() {
        //     try {
        //         const response = await axios.post(baseUrl, this.addData);
        //         this.addMessage = `Response: ${response.status} ${response.statusText}`;
        //         this.getAllMusicRecords();
        //     } catch (ex) {
        //         alert(ex.message);
        //     }
        // },

        // async updateMusicRecord() {
        //     const url = `${baseUrl}/${this.updateData.id}`;
        //     try {
        //         const response = await axios.put(url, this.updateData);
        //         this.updateMessage = `Response: ${response.status} ${response.statusText}`;
        //         this.getAllMusicRecords();
        //     } catch (ex) {
        //         alert(ex.message);
        //     }
        // }
    }
}).mount("#app");