package com.qiushiyimai.service;

import com.qiushiyimai.dao.NewsRepository;
import com.qiushiyimai.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:29
 * Description :
 */

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public void save(News news){
        newsRepository.save(news);
    }

    public List<News> findAll() {
        return newsRepository.findAll();
    }
}
