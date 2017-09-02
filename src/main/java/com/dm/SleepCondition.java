package com.dm;

import javax.persistence.*;

import static com.utils.Utils.getObjectListAsJsonList;
import static java.lang.String.format;

/**
 * Created by liran on 02/09/17.
 */
@Entity(name="SLEEP_CONDITION")
public class SleepCondition {

    @Id
    @SequenceGenerator(name = "SLEEP_CONDITION_SEQ", sequenceName = "SLEEP_CONDITION_SEQ")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SLEEP_CONDITION_SEQ")
    @Column(name = "SLEEP_CONDITION_ID")
    private Long sleepConditionID;

    @Column(name = "SLEEP_HOURS")
    private Long sleepHours;

    @Column(name = "SLEEP_QUALITY")
    private String sleepQuality;

    public SleepCondition(){}

    public SleepCondition(Long i_SleepHours, String i_SleepQuality){
        sleepHours = i_SleepHours;
        sleepQuality = i_SleepQuality;
    }
    @Override
    public String toString(){
        return format("{sleepConditionID:\"%d\",sleepHours:\"%d\",sleepQuality:\"%s\"}",sleepConditionID,sleepHours,sleepQuality);
    }

    public Long getSleepConditionID() {
        return sleepConditionID;
    }

    public void setSleepConditionID(Long sleepConditionID) {
        this.sleepConditionID = sleepConditionID;
    }

    public Long getSleepHours() {
        return sleepHours;
    }

    public void setSleepHours(Long sleepHours) {
        this.sleepHours = sleepHours;
    }

    public String getSleepQuality() {
        return sleepQuality;
    }

    public void setSleepQuality(String sleepQuality) {
        this.sleepQuality = sleepQuality;
    }
}
