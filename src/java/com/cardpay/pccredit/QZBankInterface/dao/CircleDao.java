package com.cardpay.pccredit.QZBankInterface.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cardpay.pccredit.QZBankInterface.filter.EcifFilter;
import com.cardpay.pccredit.QZBankInterface.model.Circle;
import com.wicresoft.util.annotation.Mapper;

@Mapper
public interface CircleDao {

	List<Circle> findCircleByFilter(EcifFilter filter);

	int findCircleCountByFilter(EcifFilter filter);

	Circle findCircleByClientNo(@Param("clientNo") String clientNo);

}
