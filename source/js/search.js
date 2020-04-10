const unescapeHtml = html => {
    return String(html)
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&#x3A;/g, ':')
      // Replace all the other &#x; chars
      .replace(/&#(\d+);/g, (m, p) => {
        return String.fromCharCode(p);
      })
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/<[^>]+>/g,'');
  };

var searchFunc = function(path, search_id, content_id) {
    'use strict';
    $.ajax({
        url: path,
        dataType: "xml",
        success: function( xmlResponse ) {
            // get the contents from search data
            var datas = $( "entry", xmlResponse ).map(function() {
                return {
                    title: $( "title", this ).text(),
                    content: $("content",this).text(),
                    url: $( "url" , this).text()
                };
            }).get();

            var $input = document.getElementById(search_id);
			if (!$input) return;
            var $resultContent = document.getElementById(content_id);
            if ($("#local-search-input").length > 0) {
                $input.addEventListener('input', function () {
                    var str = '<ul class=\"search-result-list\">';
                    var keywords = this.value.trim().split(/\s+/);      //以任何空白字符为分界
                    $resultContent.innerHTML = "";
                    if (this.value.trim().length <= 0) {
                        return;
                    }
                    // perform local searching
                    datas.forEach(function (data) {
                        var isMatch = false;
                        var content_index = [];
                        if (!data.title || data.title.trim() === '') {
                            data.title = "Untitled";
                        }
                        var data_title = data.title.trim();
                        var data_content = unescapeHtml(data.content.trim());
                        // var data_content_space = data_content.replace(/<[^>]+>/g, (m) => {
                        //     return Array(m.length).fill(' ').join('');  
                        //   });
                        var data_url = data.url;
                        var index_title = -1;
                        var index_content = -1;
                        var first_occur = -1;
                        // only match artiles with not empty contents
                        if (data_content !== '') {
                            keywords.forEach(function (keyword, i) {
                                index_title = data_title.toLowerCase().indexOf(keyword.toLowerCase());
                                index_content = data_content.toLowerCase().indexOf(keyword.toLowerCase());

                                if (index_title < 0 && index_content < 0) {
                                    isMatch = false;
                                } else {
                                    if (index_content < 0) {
                                        index_content = 0;
                                    }
                                    if (i == 0) {
                                        first_occur = index_content;
                                        isMatch = true;
                                        return;
                                    }
                                    // content_index.push({index_content:index_content, keyword_len:keyword_len});
                                }
                            });
                        } else {
                            isMatch = false;
                        }
                        // show search results
                        if (isMatch) {
                            if(index_title > -1){
                                keywords.forEach(function (keyword) {
                                    var regS = new RegExp(keyword, "gi");
                                    data_title = data_title.replace(regS, (m)=>{
                                        return "<em class=\"search-keyword\">" + m + "</em>"
                                    });
                                });
                                
                            }
                            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                            var content = data_content;
                            if (first_occur >= 0) {
                                // cut out 100 characters
                                var start = first_occur - 20;
                                var end = first_occur + 80;

                                if (start < 0) {
                                    start = 0;
                                }

                                if (start == 0) {
                                    end = 100;
                                }

                                if (end > content.length) {
                                    end = content.length;
                                }

                                var match_content = content.substring(start, end);

                                // highlight all keywords
                                keywords.forEach(function (keyword) {
                                    var regS = new RegExp(keyword, "gi");
                                    match_content = match_content.replace(regS, (m)=>{
                                        return "<em class=\"search-keyword\">" + m + "</em>"
                                    });
                                });

                                str += "<p class=\"search-result\">" + match_content + "...</p>"
                            }
                            str += "</li>";
                        }
                    });
                    str += "</ul>";
                    $resultContent.innerHTML = str;
                });
            }
        }
    });
}