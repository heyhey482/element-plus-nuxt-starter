<template>
<section class="s_container">
    <!-- s_title -->
    <div class="s_title">
        <h4>기준증발산량관리</h4>
        <div class="home_location"><span class="home"></span> > 밭가뭄 > 기준증발산량관리</div>
    </div>
    <!-- //s_title -->
    <hr>
    <!-- s_search -->
    <div class="s_search">
        <form action="">
            <select name="area_total" id="area_total" class="select_type mr-2">
                <option value="">지역전체</option>
            </select>
            <input type="date" id="start" name="date-start" class="input_type mr-2" value="2018-07-22" min="2018-01-01" max="2018-12-31">
            <button id="" class="btn_search mr-2" title="검색">검색</button>
        </form>
        <a href="" class="btn_comm download_excel mr-2">엑셀 다운로드</a>
        <a href="" class="btn_comm btn_type1 mr-2">재산정</a>
        <a href="" class="btn_comm btn_type1">일괄 재산정</a>
    </div>
    <!-- //s_search -->
    <hr>
    
    <!-- contents -->
    <div class="contents_wrap">
        <div class="table_type1"> 
            <table>
                <thead>
                <tr>
                    <th>
                    <label class="check_label">   
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                    </label>
                    </th>
                    <th>지역</th>
                    <th>03/31</th> 
                    <th>04/01</th>
                    <th>04/02</th>
                    <th>04/03</th>
                    <th>04/04</th>
                    <th>04/05</th>
                    <th>04/06</th>
                    <th>04/07</th>
                    <th>04/08</th>
                    <th>관리</th>                               
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> 
                    <label class="check_label">   
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                        </td> 
                    <td>서울특별시</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td><a href="" class="btn_comm2 btn_modify">수정</a></td>
                </tr>
                <tr>
                    <td> 
                    <label class="check_label">   
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                        </td> 
                    <td>서울특별시</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td><a href="" class="btn_comm2 btn_modify">수정</a></td>
                </tr>
                <tr>
                    <td> 
                    <label class="check_label">   
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                        </td> 
                    <td>서울특별시</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td>-999.00</td>
                    <td><a href="" class="btn_comm2 btn_modify">수정</a></td>
                </tr>
            </tbody>
        </table>
        </div>
        <hr>
        <!-- pagination -->
        <ul class="pagination">
            <li><a href="" class="arrow2 forward"><span class="hidden">맨앞으로</span></a></li>
            <li><a href="" class="arrow prev"><span class="hidden">이전</span></a></li>
            <li class="active"><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="" class="arrow next"><span class="hidden">다음</span></a></li>
            <li><a href="" class="arrow2 last"><span class="hidden">맨두ㅢ로</span></a></li>
        </ul>
        <!-- //pagination -->
    </div>
    <!-- //contents -->
</section>
</template>

<script>
export default {

}
</script>