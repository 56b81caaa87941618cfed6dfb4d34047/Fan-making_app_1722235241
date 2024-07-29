/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722237450", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <div class="grid">
                <div id="sidebar" class="flex-1 bg-white text-black h-screen w-64 p-4 shadow-lg">
                    <nav>
                            <li class="mb-4"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><i class='bx bx-rocket mr-2'></i>Launch</button></li>
                            <li class="mb-4"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><i class='bx bx-shuffle mr-2'></i>Randomize</button></li>
                            <li class="mb-4"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"><i class='bx bx-magic-wand mr-2'></i>Transform</button></li>
                    </nav>
                </div>
                <section id="blank-section" class="bg-white flex-1">
                    <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                    </div>
                </section>
            </div>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
