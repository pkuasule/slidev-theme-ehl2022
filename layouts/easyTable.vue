<template>
    <div 
        class="slidev-layout cover h-full w-full Cover"
        :style="style"
    >
        <div class="my-auto border-t border-secondary h-full w-full grid content-center">
            <ve-table :columns="columns" :table-data="tableData"></ve-table>
            <footer 
                class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4">
                <ehl-logo-secondary />
                <div class="flex justify-end text-xs text-gray">
                    <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }}
                </div>
            </footer>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", align: "center" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "right",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
</script>