<template>
    <div id="search_table"
         v-if="this.getSearchResults.length != 0" >

        <div>
            <b-table striped hover :fields="this.fields" :items="this.searchResultItems">
                <template v-slot:cell(Item)="item">
                    <span v-html="item.value"></span>
                </template>
                <template v-slot:cell(Image)="image">
                    <span v-html="image.value"></span>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default{
  name: 'ItemList',

  props: {

  },

  data() {
    return {
      fields: [
        {
          key: "Website",
          sortable: false
        },
        {
          key: "Image",
          sortable: false
        },
        {
          key: "Item",
          sortable: true
        },
        {
          key: "Price",
          sortable: true
        },
      ]
    }
  },
  computed: {
    ...mapGetters([
      "getSearchResults"
    ]),

    searchResultItems() {
      var items = []
      this.getSearchResults.forEach(item => {
        items.push({
          "Website": item["Website"],
          "Image": item["Image"],
          "Item": "<a href=\"" + item["Link"] + "\">" + item["Name"] + "</a>",
          "Price": item["Price"],
        })
      })

      return items
    }
  }
}
</script>
