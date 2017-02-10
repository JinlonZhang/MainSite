package com.qiushiyimai.dao;

import com.qiushiyimai.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:28
 * Description :
 */

@Repository
public interface NewsRepository  extends JpaRepository<News,Long>{
}
