package com.qiushiyimai.controller.news;

import com.qiushiyimai.service.NewsService;
import com.qiushiyimai.service.NewsTypeService;
import com.qiushiyimai.entity.NewsType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:12
 * Description :
 */

@Controller
//@RequestMapping(value = "/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @Autowired
    private NewsTypeService newsTypeService;




}
